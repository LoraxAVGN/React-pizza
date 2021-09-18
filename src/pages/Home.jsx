import {Categories, Popup} from "../components";
import Pizza from "../components/Pizza";

function Home({items}) {
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
                <Popup items={['популярности', 'цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(item => <Pizza key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default Home;