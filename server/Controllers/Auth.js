const User = require('../Modals/User');

export const registerUser = async (req, res, next) => {
    const { email, name, phonenumber, dateofbirth, password } = req.body;

    let user = await User.find({ email }).exec();

    if (user) {
        return res.json({ message: 'User already exists' });
    }

    const encryptedPassword = password;

    const newUser = new User({
        email, name, phonenumber, dateofbirth, password: encryptedPassword
    });

    newUser.save().then(res => {
        return res.json({ message: 'User created successfully' });
    }).catch(err => console.log(err));
};

export const loginUser = async (req,res,next) => {
    const { email, password } = req.body;
    let user = await User.find({ email }).exec();

    if (!user) {
        return res.json({ message: 'user is not found' });
    }

    // compare password --

    const comparePass = password

    if (comparePass) {
        // generate jwt token and send to frountend
    } else {
        res.json({ message: 'invalide credentials' });
    }

}