import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var() (--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. Загрузити залогінених користувачів
  const { isLoading, isAuthenticated } = useUser();

  //2. Якщо нема залогіненого користувача то перенаправляти до сторінки login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isLoading, isAuthenticated, navigate]);

  //3. Спінер під час загрузки
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4.Якщо залогінені то можем показати решту сторінок

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
