import { transliterate } from "../global";
import SelectCard from "./CardSelectCountry";

const ListCountry = ({ listCountry }) => {
  if (!listCountry || listCountry.length === 0)
    return <p>В процессе наполнения</p>; //TODO:Сделать карточку при клике на которую открывается форма с выбранным континентом
  return (
    <div className="list">
      {/* list job by */}
      {listCountry.length >= 6
        ? listCountry
            .slice(0, 5)
            .sort((a, b) => (a.count < b.count ? 1 : -1))
            .map((county) => (
              <SelectCard
                key={county.id}
                nameCountry={county.location}
                url={`job/${transliterate(county.location)}`}
                card={county}
              />
            ))
            .concat(
              <SelectCard
                key={"next"}
                nameCountry={"Далее"}
                url={`job/${listCountry[0].continent}`}
              />
            )
        : listCountry.map((county) => (
            <SelectCard
              key={county.id}
              nameCountry={county.location}
              url={`job/${transliterate(county.location)}`}
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
