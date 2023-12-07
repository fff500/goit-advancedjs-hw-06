/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

type ComponentPropsType = {
  title: string;
}

interface ComponentInterface {
  props: ComponentPropsType
}

class Component implements ComponentInterface{
  constructor (public props: ComponentPropsType) {}
}

class Page extends Component {
  constructor(props: ComponentPropsType) {
    super(props)
  }

  pageInfo () {
    console.log(this.props.title);
  }
}

export {};