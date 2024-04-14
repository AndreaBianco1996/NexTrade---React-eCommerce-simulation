import { useLocation } from "react-router-dom";
import { useGetSingleProductQuery } from "../../services/productsApi";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";

function Item() {
  const { state: id } = useLocation();
  const { data, error, isLoading } = useGetSingleProductQuery(id);

  if (isLoading) return <Spinner />;
  if (error) return <Error>{error.message}</Error>;

  return <div>{data.title}</div>;
}

export default Item;
