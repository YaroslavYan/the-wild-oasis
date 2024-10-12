import AddCabin from "../features/cabins/AddCabin";
import CabinsTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinsTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
