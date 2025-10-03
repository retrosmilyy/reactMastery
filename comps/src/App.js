import Accordion from "./components/Accordion";


function App() {
const items = [
  {
    id:'dsfasf',
    label: 'Can I use React on a project?',
    content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'

  },
  {
    id: 'sdfsdfgtsdfg',
    label: 'Can I use Javascript on a project?',
  content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
  },
  {
    id:'sdfsd',
    label: 'Can I use CSS on a project?',
  content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
  }
];

    return <Accordion items={items} />;
}

export default App;
