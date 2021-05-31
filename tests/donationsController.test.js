const donationsController = require('../controllers/donationsController');
const axios = require('axios');
axios.defaults.baseURL = "http://127.0.0.1:5000/"

test('Donations controller should reject obj of len 0', async () => {
    await axios.post("/")
        .then(req => {
            expect(req.data.code).toBe('ER_BAD_NULL_ERROR');
        })
});