
// Função para validar o email
exports.validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Função para validar a senha
exports.validatePassword = (password) => {
    // Aplique suas regras de validação de senha aqui
    // Retorne true se a senha for válida, caso contrário, retorne false
};

// Função para validar o nome
exports.validateName = (name) => {
    // Aplique suas regras de validação do nome aqui
    // Retorne true se o nome for válido, caso contrário, retorne false
};

// Função para validar o formulário de contato
exports.validateContactForm = (name, email, subject, message) => {
    const errors = {};

    if (!name || name.trim() === '') {
        errors.name = 'O nome é obrigatório.';
    }

    if (!email || email.trim() === '') {
        errors.email = 'O email é obrigatório.';
    } else if (!validateEmail(email)) {
        errors.email = 'O email é inválido.';
    }

    if (!subject || subject.trim() === '') {
        errors.subject = 'O assunto é obrigatório.';
    }

    if (!message || message.trim() === '') {
        errors.message = 'A mensagem é obrigatória.';
    }

    return errors;
};
