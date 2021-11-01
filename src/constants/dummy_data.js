// project data object template
// {
//     key: '',
//     id: '',
//     name: '',
//     details: {
//         type: '',
//         madeFor: '',
//         finishBy: '',
//         sizeMade: '',
//         toolsData: {},
//         materialsData: {},
//         patternData: {
//             patternName: '',
//             patternLink: '',
//             patternAuthor: '',
//         },
//         projectNotes: {},
//     },
//     images: {},
// }

// STOCK IMG URL
// https://images.pexels.com/photos/2070676/pexels-photo-2070676.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260

export const DUMMY_DATA = [
  {
    key: '1',
    id: '1',
    name: 'Scarf',
    details: {
      type: 'CROCHET',
      madeFor: 'me',
      currentDate: '06/10/21',
      finishBy: '09/20/22',
      sizeMade: '6x1',
      toolsData: [{ tool: '6mm hook' }, { tool: '3mm hook' }],
      materialsData: [{ material: 'pink yarn' }, { material: 'blue yarn' }],
      patternData: {
        patternName: 'BEST SCARF EVAR!!!!',
        patternLink:
          'https://www.thesprucecrafts.com/mens-winter-scarf-free-crochet-pattern-979200',
        patternAuthor: 'Amy Solovay',
      },
      projectNotes: [
        {
          note1:
            'Be sure not to pull too tight. My first few rows were WAY to snug.',
        },
      ],
    },
    images: [
      {
        url: 'https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        caption: 'Finished product!',
      },
    ],
  },
  {
    key: '2',
    id: '2',
    name: 'Blanket',
    details: {
      type: 'Knit',
      madeFor: 'me',
      currentDate: '02/05/20',
      finishBy: '05/15/22',
      sizeMade: '8x6',
      toolsData: [{ tool: '6mm wooden needles' }],
      materialsData: [{ material: 'black yarn' }, { material: 'green yarn' }],
      patternData: {
        patternName: 'A cool blanket',
        patternLink:
          'https://www.yarnspirations.com/on/demandware.static/-/Sites-master-catalog-spinrite/default/dw7fc8c870/PDF/BRK0502-031293M.pdf#prefn1=patternSkillTypeString&prefv1=Knit&prefn2=patternProjectType&prefv2=Afghans+&start=3',
        patternAuthor: 'yarnspirations.com',
      },
      projectNotes: [
        {
          note1:
            'Starting yarn was too scratchy. Need to buy new and sart over.',
        },
        {
          note2:
            "This type of weeve is too loose, I don't like the look of it. I won't be doing this type of weeve again.",
        },
      ],
    },
    images: [
      {
        url: 'https://images.pexels.com/photos/1924814/pexels-photo-1924814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption: 'Final result',
      },
    ],
  },
];
