
// import style from '../myProjects/myProjects.module.scss'

const projects = [
    {
      id: 1,
      name: 'Web Development Projects',
      children: [
        { id: 2, name: 'Portfolio Website', description: 'A personal portfolio website built with React.', link: 'https://#', children: [] },
        { id: 3, name: 'E-commerce Site', description: 'An online store built with Node.js and Express.', link: 'https://#', children: [] }
      ]
    },
    {
      id: 4,
      name: 'Data Science Projects',
      children: [
        { id: 5, name: 'Sentiment Analysis', description: 'A sentiment analysis project using Python and NLP.', link: 'https://#', children: [] },
        { id: 6, name: 'Sales Forecasting', description: 'A project to forecast sales using machine learning models.', link: 'https://#', children: [] }
      ]
    }
  ];
  
  export default projects;
  
  