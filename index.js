class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            step: 1
        };
    }

    increment(){
        //todo: state.count++;
        if(this.state.count>=0){
        this.setState({
            count: this.state.count +this.state.step
        })}

    }

    decrement(){
        if(this.state.count>0){
        this.setState({
            count:this.state.count -this.state.step
        })}
    }

    render(){
        const h2 = React.createElement('h2',{}, `Значення лічильника: ${this.state.count}`);
        const step =React.createElement('h2',{}, `Значення лічильника: ${this.state.step}`)
        const button = React.createElement('button',{onClick:()=>{this.increment()}},'+')
        const button2 = React.createElement('button',{onClick:()=>{this.decrement()}},'-')
        const setStepButton = React.createElement('button',{onClick:()=>{
            this.setState({
                step:Number(prompt('Введіть значення кроку:'))
            })
        }},'Крок лічильника')
        return React.createElement(React.Fragment, {},h2, Counter, button, button2, step, setStepButton);
    }
}

const component = React.createElement(Counter)

const root = document.querySelector('#root');

ReactDOM.render(component, root)


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