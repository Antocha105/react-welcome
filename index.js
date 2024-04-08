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

const component = React.createElement(HeaderComponent, {name: 'JOhn'});

const component2 = React.createElement(HeaderComponent, {name: 'TOHA'});

const parentElement = React.createElement('secion',{}, component, component2)









const root = document.querySelector('#root')

ReactDOM.render(parentElement,  root)