import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../services/productsApi";
import Spinner from "../components/spinner/Spinner";
import Error from "../components/error/Error";
import ItemTable from "../features/item/ItemTable";

function Item() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingleProductQuery(id);

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return <ItemTable product={data} />;
}

export default Item;
