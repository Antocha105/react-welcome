
class HeaderComponent extends React.Component {

    anotherMethod(){

    }

    render(){ //єдиний метод який зобоввязані визначити в класі
        const p = React.createElement('p',{}, 'Super paragraph');
        const h2 = React.createElement('h2', {title: 'hi!'}, `HELLO ${this.props.name}`);
        const article = React.createElement('article', {},h2,p)

        return article;
    }
}

const component = React.createElement(HeaderComponent, {name: 'JOhn'}, 'TEXT--JOHN');

const component2 = React.createElement(HeaderComponent, {name: 'TOHA'},'TEXT--TOHA');

const parentElement = React.createElement('section',{}, component, component2)









const root = document.querySelector('#root')

ReactDOM.render(parentElement,  root)
/*
1. Реакт - бібілотека для створення користувацьких інтерфейсів
2. Ви можете використовувати як звичайний "ванільний" JS, так можете використовувати і Реакт. Це може відбуватись одночасно
3. Пропси - це дані, які можна передавати в компоненти для того, щоб налаштовувати зовнішній вигляд компонент.
4. Для того, щоб Реакт нам щосб відобразив, нам потрібно викликати метод ReactDOM.render().
Він приймає 2 параметри:
- елемент, який потрібно відрендерити
- елемент, в який потрібно рендерити 
5. Реакт оперує Реакт-елементами.
Реакт-елемент - це об'єкт.
Реакт-елемент набагато легший, ніж той самий елемент у нативному DOM'і.
6. З цих Реакт-елементів як маленьких блоків складаються Реакт-компоненти.
А з Реакт-компонент складаються сторінки, які будуть бачити наші користувачі.

*/



/*
class divComponent extends React.Component {
    render(){
        const div = React.createElement('div',{title: 'ИДИ НАХУЙ'},`Hello ${this.props.name}`)

        return div
    }
}

const name1 = React.createElement(divComponent, {name: 'Zalypa'})

const name2 = React.createElement(divComponent, {name: 'Pydaras'})

const parent = React.createElement('section',{},name1,name2)

const root = document.querySelector('#root')

ReactDOM.render(parent,  root)

*/