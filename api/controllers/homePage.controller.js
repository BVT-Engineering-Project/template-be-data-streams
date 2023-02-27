class HomePageController {
    static async homePageView(req, res) {
        return res.status(200).json({
            status_code: 200,
            message: 'You can use this template service to create another services'
        });
    }
}

module.exports = HomePageController;