import SelectCard from "./CardSelectCountry";

const ListCountry = ({ listCountry }) => {
  if (!listCountry || listCountry.length === 0)
    return <p>В процессе наполнения</p>; //TODO:Сделать карточку при клике на которую открывается форма с выбранным континентом
  return (
    <div className="list">
      {listCountry.length >= 6
        ? listCountry
            .slice(0, 5)
            .sort((a, b) => (a.count < b.count ? 1 : -1))
            .map((county) => (
              <SelectCard
                key={county.id}
                nameCountry={county.location}
                url={`job/${county.id}`}
                card={county}
              />
            ))
            .concat(
              <SelectCard
                key={"next"}
                nameCountry={"Далее"}
                url={`job/${listCountry.continent}`}
              />
            )
        : listCountry.map((county) => (
            <SelectCard
              key={county.id}
              nameCountry={county.location}
              url={`job/${label}`}
              card={county}
            />
          ))}
      <style jsx>{`
        .list {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};
export default ListCountry;
