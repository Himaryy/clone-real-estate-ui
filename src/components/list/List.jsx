import listData from "../../lib/DummyData";
import Card from "../../components/Card/Card";
import "./List.scss";
const List = () => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
