import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch('http, {
        method,
        headers,
        },
        body, password }),
      });
      
      if (response.ok) {
        localStorage.setItem("adminAuth", "true");
        onLogin();
      } else {
        setError("Senha incorreta");
      }
    } catch (error) {
      setError("Erro de conexão");
    }
  };

  return (

          Acesso Administrativo

             setPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            />
            {error && {error}}

            Entrar

  );
};

export default AdminLogin;