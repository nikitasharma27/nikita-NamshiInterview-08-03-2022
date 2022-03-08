import './App.css';
import Matrix from './components/Matrix';

// var matrix = [];
// var matrix

// rows
// for (var i = 0; i < 6; ++i) {
//     axes.push(self.board[i]);
// }
// // columns
// for (var j = 0; j < 6; ++j) {
//     var column = [];
//     for (var i = 0; i < 6; ++i) {
//         column.push(self.board[i][j]);
//     }
// }
// // diagonals
// axes.push([self.board[0][1], self.board[1][2]]);

function App() {
  return (
    <div className="App">
      <Matrix></Matrix>
    </div>
  );
}

export default App;
