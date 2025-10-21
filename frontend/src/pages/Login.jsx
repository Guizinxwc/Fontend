import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.email === "admin@unityautismcare.com" && formData.password === "admin123") {
      const adminData = {
        Id: 1,
        Nome: "Admin",
        Email: "admin@unityautismcare.com",
        Tipo: "Admin"
      };
      localStorage.setItem("userAuth", JSON.stringify(adminData));
      navigate("/dashboard");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Email inválido");
      return;
    }

    if (formData.password.length < 6) {
      setError("Senha deve ter pelo menos 6 caracteres");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find(u => 
      u.email.toLowerCase() === formData.email.toLowerCase() && 
      u.senha === formData.password &&
      u.ativo
    );
    
    if (usuario) {
      const userData = {
        Id: usuario.id,
        Nome: usuario.nome,
        Email: usuario.email,
        Tipo: usuario.tipo
      };
      localStorage.setItem("userAuth", JSON.stringify(userData));
      navigate("/");
    } else {
      setError("Email ou senha incorretos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
            <LogIn className="w-6 h-6" />
            Entrar na Conta
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                autoComplete="off"
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                autoComplete="new-password"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">
              <LogIn className="w-4 h-4 mr-2" />
              Entrar
            </Button>
            <p className="text-center text-sm text-gray-600">
              Não tem conta?{" "}
              <Link to="/cadastro" className="text-primary hover:underline">
                Cadastre-se
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;