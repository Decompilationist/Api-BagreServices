const User = require('../models/user');

// Controlador para criar um novo usuário
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

// Controlador para autenticar um usuário
exports.authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Aqui você pode gerar um token de autenticação e retorná-lo como resposta

    res.json({ message: 'Autenticação bem-sucedida' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao autenticar usuário' });
  }
};
