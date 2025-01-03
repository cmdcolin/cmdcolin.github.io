export const metadata = {
  title: 'Books',
}

const returnValue = [
  {
    year: 2024,
    author: 'Erik Larson',
    title: "Isaac's Storm",
  },

  {
    year: 2024,
    author: 'Erik Larson',
    title:
      'The Demon of Unrest: A Saga of Hubris, Heartbreak, and Heroism at the Dawn of the Civil War',
  },
  { year: 2024, author: 'Jeffrey Eugenides', title: 'The Virgin Suicides' },
  { year: 2024, author: 'Kazuo Ishiguro', title: 'Klara and the Sun' },
  { year: 2023, author: 'Chinua Achebe', title: 'Things Fall Apart' },
  { year: 2023, author: 'David Diop', title: 'At Night All Blood Is Black' },
  { year: 2023, author: 'Sylvia Plath', title: 'The Bell Jar' },
  { year: 2023, author: 'Kazuo Ishiguro', title: 'A Pale View of Hills' },
  {
    year: 2023,
    author: 'Otessa Moshfegh',
    title: 'My Year of Rest and Relaxation',
  },
  { year: 2023, author: 'Kazuo Ishiguro', title: 'Never Let Me Go' },
  { year: 2023, author: 'Osamu Dazai', title: 'No Longer Human' },
  { year: 2023, author: 'Haruki Murakami', title: 'Norwegian Wood' },
  { year: 2023, author: 'David Sedaris', title: 'Me Talk Pretty One Day' },
  {
    year: 2023,
    author: 'Siddhartha Mukherjee',
    title: 'The Emperor of All Maladies: A Biography of Cancer',
  },
  { year: 2023, author: 'John Williams', title: 'Stoner' },
  { year: 2022, author: 'John Steinbeck', title: 'Tortilla Flat' },
  {
    year: 2022,
    author: 'Erich Maria Remarque',
    title: 'All Quiet on The Western Front',
  },
  { year: 2022, author: 'Ernest Hemingway', title: 'The Sun Also Rises' },
  { year: 2022, author: 'Ernest Hemingway', title: 'A Farewell to Arms' },
  { year: 2022, author: 'Fyodor Dostoevsky', title: 'Crime and Punishment' },
  { year: 2022, author: 'Anne Frank', title: 'Diary of a Young Girl' },
  { year: 2022, author: 'David De Jong', title: 'Nazi Billionaires' },
  { year: 2022, author: 'Erik Larson', title: 'Dead Wake' },
  { year: 2022, author: 'Erik Larson', title: 'In the Garden of Beasts' },
  {
    year: 2021,
    author: 'Bill Bryson',
    title: 'A Short History of Nearly Everything',
  },
  { year: 2021, author: 'John Steinbeck', title: 'Of Mice and Men' },
  {
    year: 2021,
    author: 'Barbara Demick',
    title: 'Nothing to Envy: Ordinary Lives in North Korea',
  },
  { year: 2021, author: 'David Green', title: 'Killers of the Flower Moon' },
  { year: 2021, author: 'Erik Larson', title: 'The Devil in the White City' },
  { year: 2021, author: 'Erik Larson', title: 'Thunderstruck' },
  { year: 2021, author: 'Scott F Fitzgerald', title: 'The Great Gatsby' },
  {
    year: 2021,
    author: 'Robert Kolker',
    title:
      'Lost Girls: The Unsolved American Mystery of the Gilgo Beach Serial Killer Murders',
  },
  {
    year: 2021,
    author: 'Robert Kolker',
    title: 'Hidden Valley Road: Inside the Mind of an American Family',
  },
  { year: 2021, author: 'Erik Larson', title: 'The Splendid and the Vile' },
  {
    year: 2021,
    author: 'Carl Zimmer',
    title:
      "She Has Her Mother's Laugh: What Heredity Is, Is Not, and May Become",
  },
  { year: 2020, author: 'Victor Frankl', title: "Man's Search for Meaning" },
  {
    year: 2020,
    author: 'Yuval Harari',
    title: 'Sapiens: A Brief History of Humankind',
  },
  { year: 2020, author: 'Jeffrey Eugenides', title: 'Middlesex' },
  { year: 2020, author: 'Pat Conroy', title: 'The Prince of Tides' },
  { year: 2019, author: 'Tennesee William', title: 'A Streetcar Named Desire' },
]

export default function Contents() {
  const cell = 'border border-solid dark:border-[#555] border-[#aaa] p-1'
  return (
    <div>
      <h2>Books I&apos;ve read lately</h2>
      <table className="border-collapse">
        <thead>
          <tr>
            <th className={cell}>year</th>
            <th className={cell}>author</th>
            <th className={cell}>title</th>
          </tr>
        </thead>
        <tbody>
          {returnValue.map((line, index) => (
            <tr key={index}>
              <td className={cell}>{line.year}</td>
              <td className={cell}>{line.author}</td>
              <td className={cell}>{line.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="https://github.com/cmdcolin/cmdcolin.github.io/discussions/15">
        Recommend me a book
      </a>
    </div>
  )
}
