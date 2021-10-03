import { Router } from 'express';
import { UserModel } from '../models/user';
import { generateAuthToken, checkAuth } from '../middlewares/auth';

const router = Router();

router.post('/login', async (req, res) => {
  let { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (!user || !user.isValidPassword(password))
    return res.status(401).json({ msg: 'Invalid Username/Password' });

  const token = await generateAuthToken(user);

  res.header('x-auth-token', token).json({
    msg: 'login OK',
  });
});

router.post('/signup', async (req, res) => {
  const { username, password, email, firstName, lastName } = req.body;
  console.log(req.body);
  if (!username || !password || !email || !firstName || !lastName)
    return res.status(400).json({ msg: 'Invalid body fields' });

  const query = {
    $or: [{ username: username }, { email: email }],
  };

  console.log(query);
  const user = await UserModel.findOne(query);

  if (user) return res.status(400).json({ msg: 'User already exists' });

  const userData = {
    username,
    password,
    email,
    firstName,
    lastName,
  };

  const newUser = new UserModel(userData);
  const token = await generateAuthToken(newUser);

  await newUser.save();

  res.header('x-auth-token', token).json({
    msg: 'signup OK',
  });
});

router.get('/secure-data', checkAuth, (req, res) => {
  res.json({ msg: 'Llegaste a la data segura' });
});
export default router;
