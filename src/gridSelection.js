const axisX = 8;
const axisY = 16;
const blockEmpty = '#E8F1FF';
const blockFilled = '#3D7BD9';

const grid = new Array(axisX).fill(new Array(axisY).fill())
  .reduce((rows, current, indexRowTrX) => {
    const tds = current.reduce((cells, _, indexCellTdY) => {
      cells['td' + indexCellTdY] = {
        tag: 'td',
        style: {
          width: '26px',
          height: '26px',
          backgroundColor: blockEmpty,
          borderRadius: '2px'
        },
        on: {
          click: (event, element, state) => {
            fillTable(indexRowTrX, indexCellTdY, element);
            fillResults(indexRowTrX, indexCellTdY, element);
          }
        }
      };
      return cells;
    }, {});


    rows['tr' + indexRowTrX] = {
      tag: 'tr',
      ...tds
    }
    return rows;
  }, {});

function fillTable(limitX, limitY, element) {
  for (let x = 0; x < axisX; x++) {
    const tr = `tr${x}`;
    for (let y = 0; y < axisY; y++) {
      const td = `td${y}`;
      const backgroundColor = x > limitX || y > limitY ? blockEmpty : blockFilled;
      element.lookup('table')[tr][td]
        .setProps({style: {backgroundColor}});
    }
  }
}

function fillResults(limitX, limitY, element) {
  element.lookup('footer')['coordenates']
    .setProps({text: `Selection coordenates: ${limitY + 1}, ${limitX + 1}`});

  element.lookup('footer')['total']
    .setProps({text: `Total cells selected: ${(limitX + 1) * (limitY + 1)}`});
}

export const tables = {
  session: {
    p: {
      text: 'Grid Selection',
      style: {
        color: 'black',
        fontWeight: '700',
        font_family: 'Europa',
        width: '100%'

      }
    },
    style: {
      backgroundColor: 'white',
      height: '384px',
      width: '546px',
      padding: '20px',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    table: {
      ...grid,
    },
    footer: {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        width: '100%'
      },
      coordenates: {
        tag: 'p',
        style: {
          color: 'black',
          font_family: 'Europa',
        }
      },
      total: {
        tag: 'p',
        style: {
          color: 'black',
          font_family: 'Europa',
        }
      }
    }
  }
}
