import './index.css'

export const metadata = {
  title: 'Books',
}

const ret = `2023	Kazuo Ishiguro	A Pale View of Hills
2023	Otessa Moshfegh	My Year of Rest and Relaxation
2023	Kazuo Ishiguro	Never Let Me Go
2023	David Sedaris	Me Talk Pretty One Day
2023	Siddhartha Mukherjee	The Emperor of All Maladies: A Biography of Cancer
2022	John Steinbeck	Tortilla Flat
2022	Erich Maria Remarque	All Quiet on The Western Front
2022	Ernest Hemingway	A Farewell to Arms
2022	Anne Frank	Diary of a Young Girl
2022	Erik Larson	Dead Wake
2022	Erik Larson	In the Garden of Beasts
2021	Bill Bryson	A Short History of Nearly Everything
2021	John Steinbeck	Of Mice and Men
2021	Barbara Demick	Nothing to Envy: Ordinary Lives in North Korea
2021	David Green	Killers of the Flower Moon
2021	Erik Larson	The Devil in the White City
2021	Erik Larson	Thunderstruck
2021	Scott F Fitzgerald	The Great Gatsby
2021	Robert Kolker	Lost Girls: The Unsolved American Mystery of the Gilgo Beach Serial Killer Murders
2021	Robert Kolker	Hidden Valley Road: Inside the Mind of an American Family
2021	Erik Larson	The Splendid and the Vile
2021	Carl Zimmer	She Has Her Mother's Laugh: What Heredity Is, Is Not, and May Become
2020	Victor Frankl	Man's Search for Meaning
2020	Yuval Harari	Sapiens: A Brief History of Humankind
2020	Jeffrey Euenides	Middlesex
2020	Pat Conroy	The Prince of Tides`
export default function Contents() {
  return (
    <div className="tiny">
      <h2>Books I&apos;ve read lately</h2>
      <table>
        <thead>
          <tr>
            <th>year</th>
            <th>author</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {ret.split('\n').map((line, idx) => (
            <tr key={idx}>
              {line.split('\t').map(elt => (
                <td key={elt}>{elt}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
