import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { showSuccess, showError } from "@/utils/notifications";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome,
    email,
    senha,
    confirmarSenha);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setError("Email inválido");
      return;
    }

    if (!validatePassword(formData.senha)) {
      setError("Senha deve ter pelo menos 8 caracteres, 1 maiúscula e 1 número");
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      setError("Senhas não coincidem");
      return;
    }

    // Salvar no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    
    // Verificar se email já existe
    if (usuarios.find((u) => u.email === formData.email)) {
      setError("Email já cadastrado");
      return;
    }
    
    const novoUsuario = {
      id),
      nome,
      email,
      senha,
      tipo,
      ativo,
      dataCriacao).toISOString()
    };
    
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    showSuccess("Cadastro realizado com sucesso!");
    navigate("/");
  };

  return (

          Criar Conta

              Nome Completo
               setFormData({...formData, nome)}
              />

              Email
               setFormData({...formData, email)}
              />

              Senha
               setFormData({...formData, senha)}
              />
              
                Mínimo 8 caracteres, 1 maiúscula e 1 número

              Confirmar Senha
               setFormData({...formData, confirmarSenha)}
              />

            {error && {error}}
            Cadastrar

              Já tem conta?{" "}
              <Link to="/login" className="text-primary hover);
};

export default Cadastro;