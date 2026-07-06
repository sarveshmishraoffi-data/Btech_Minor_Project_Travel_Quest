const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    let { category, search } = req.query;
    let query = {};
    if (category) {
        query.category = category;
    }
    if (search) {
        query.title = { $regex: search, $options: "i" };
    }
    const allListings = await Listing.find(query);
    res.render("listings/index.ejs", { allListings, currentCategory: category, search });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.show = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    // Fetch similar listings for Similarity Finder
    const similarListings = await Listing.find({ category: listing.category, _id: { $ne: listing._id } }).limit(3);
    res.render("listings/show.ejs", { listing, similarListings });
};

module.exports.create = async (req, res, next) => {
    let url = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";
    let filename = "listingimage";
    if (req.file) {
        if (req.file.path && req.file.path.startsWith("http")) {
            url = req.file.path;
            filename = req.file.filename;
        } else {
            url = "/uploads/" + req.file.filename;
            filename = req.file.filename;
        }
    }
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    // Lower resolution preview image for edit form
    if (originalImageUrl.includes("unsplash.com")) {
        originalImageUrl = originalImageUrl.replace("&w=800", "&w=250");
    }
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.update = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (req.file) {
        let url, filename;
        if (req.file.path && req.file.path.startsWith("http")) {
            url = req.file.path;
            filename = req.file.filename;
        } else {
            url = "/uploads/" + req.file.filename;
            filename = req.file.filename;
        }
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroy = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log("Deleted listing:", deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};

module.exports.addExpense = async (req, res) => {
    let { id } = req.params;
    let { desc, amount, paidBy } = req.body;
    let listing = await Listing.findById(id);
    if (!listing) {
        return res.status(404).json({ error: "Listing not found" });
    }
    listing.expenses.push({ desc, amount: parseFloat(amount), paidBy });
    await listing.save();
    res.status(200).json({ message: "Expense added", expenses: listing.expenses });
};

module.exports.addPriceAlert = async (req, res) => {
    let { id } = req.params;
    let { email, targetPrice } = req.body;
    let listing = await Listing.findById(id);
    if (!listing) {
        return res.status(404).json({ error: "Listing not found" });
    }
    listing.priceAlerts.push({ email, targetPrice: parseFloat(targetPrice) });
    await listing.save();
    res.status(200).json({ message: "Alert registered", alerts: listing.priceAlerts });
};
