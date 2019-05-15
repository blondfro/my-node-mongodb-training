const TeamMember = require('../../models/teamMember');

module.exports = function (router) {
	// GET: List of Team Members
	router.get('/team', function (req, res) {

	});

    //    POST: Create new team member document
    router.post('/team', (req, res) => {
        let member = new TeamMember(req.body);
        member.save((err, member) => {
            if(err) {
                return res.status(400).json(err);
            }
            res.status(200).json(member);
        });
    });
};