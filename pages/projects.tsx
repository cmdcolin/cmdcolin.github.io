import Header from '../components/header'
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

function Contents() {
  return (
    <div className="tiny">
      <h2 id="bioinformatics">Work</h2>

      <p>
        I have worked on a variety of bioinformatics applications including
        model organism databases, genome browsers, and data analysis pipelines.
        See my{' '}
        <a href="https://scholar.google.com/citations?view_op=list_works&amp;hl=en&amp;user=--FwzsgAAAAJ">
          google scholar
        </a>{' '}
        for publications. Our jbrowse 2 paper was{' '}
        <a href="https://www.biorxiv.org/content/10.1101/2022.07.28.501447v1)(https://www.biorxiv.org/content/10.1101/2022.07.28.501447v1">
          recently published
        </a>{' '}
        which I was proud to be first author of.
      </p>
      <h2 id="awesome-lists">Awesome lists</h2>
      <p>
        I like to keep track of various awesome or odd or interesting things in
        these repos. Please add your favorites with PRs :)
      </p>
      <ul>
        <li>
          <a href="https://github.com/cmdcolin/oddgenes">oddgenes</a>
        </li>
        <li>
          <a href="https://github.com/cmdcolin/genomesignals">genomesignals</a>
        </li>
        <li>
          <a href="https://github.com/cmdcolin/awesome-jbrowse">
            awesome-jbrowse
          </a>{' '}
          and{' '}
          <a href="https://github.com/cmdcolin/awesome-jbrowse2">
            awesome-jbrowse2
          </a>
        </li>
        <li>
          <a href="https://github.com/cmdcolin/awesome-genome-visualization">
            awesome-genome-visualization
          </a>
        </li>
        <li>
          <a href="https://github.com/cmdcolin/technical_oddities">
            technical-oddities
          </a>
        </li>
      </ul>

      <h2 id="other">Bioinformatics tools</h2>
      <ul>
        <li>
          <a href="https://github.com/cmdcolin/secondary_rewriter">
            secondary_rewriter
          </a>{' '}
          - Adds SEQ/QUAL tags to secondary alignments in BAM/CRAM, written
          while learning Rust (2022)
        </li>
        <li>
          <a href="https://github.com/cmdcolin/vcfverifier">vcfverifier</a> -
          Checks that the REF field in VCF matches an underlying FASTA reference
          genome, written while learning Rust (2022)
        </li>
      </ul>
      <h2 id="other">Utilities</h2>
      <ul>
        <li>
          <a href="https://github.com/cmdcolin/fml9000">fml9000</a>- A music
          player made using Rust and GTK4 (2022)
        </li>
      </ul>
      <h2 id="art">Visual art/code sketches</h2>
      <ul>
        <li>
          <a href="https://github.com/cmdcolin/twitter_fractal_bot">
            chaosbot80
          </a>{' '}
          - A twitter bot to post fractals (2022)
        </li>
        <li>
          <a href="https://cmdcolin.github.io/sm_u20">sm u20</a> - A submarine
          inspired audio/visual page (2022)
        </li>
        <li>
          <a href="https://cmdcolin.github.io/nightskies/">nightskies</a> - An
          audio/visual webpage (2022)
        </li>
        <li>
          <a href="https://cmdcolin.github.io/interaction_shadow/">
            interaction shadow
          </a>{' '}
          - An noise/visual webpage (2021)
        </li>
        <li>
          <a href="https://cmdcolin.github.io/reclaimedspace/">
            reclaimed space
          </a>{' '}
          - A visual webpage (2021)
        </li>
        <li>
          <a href="https://cmdcolin.github.io/spiralzone/">spiralzone</a> - A
          visual webpage (2021)
        </li>
        <li>
          <a href="https://cmdcolin.github.io/logistic_chaos_map/">
            logistic map fractal viewer
          </a>{' '}
          using Rust/WASM/React (2020)
        </li>
      </ul>
      <h2 id="mem">Memorial</h2>
      <ul>
        <li>
          <a href="https://myloveydove.com">myloveydove.com</a> - a page for
          dixie{' '}
          <a href="https://github.com/cmdcolin/aws_serverless_photo_gallery">
            code
          </a>
          , using AWS lambda/S3 (2020)
        </li>
      </ul>
      <h2 id="misc">Small projects</h2>
      <ul>
        <li>
          <a href="https://colindiesh.shinyapps.io/github_burndown/">
            github burndown
          </a>{' '}
          a shiny app to plot &quot;burndown&quot; style statistics on github
          issues (2021)
        </li>
        <li>
          <a href="https://cmdcolin.github.io/githubgraphjs">githubgraphjs</a>{' '}
          visualize your Github Actions build times (2020)
        </li>
        <li>
          <a href="https://cmdcolin.github.io/travigraphjs">travigraphjs</a>{' '}
          visualize your travis-CI build times (2019)
        </li>
        <li>
          <a href="http://cmdcolin.github.io/tumblrgraph2/">tumblrgraph</a>{' '}
          visualize tumblr reblogs with cytoscapejs (2017)
        </li>
        <li>
          <a href="https://cmdcolin.github.io/resort/qs.html">resort</a>{' '}
          visualize sorting algorithms (2017)
        </li>
        <li>
          <a href="https://elsiklab.github.io/ontograph/">ontograph</a>{' '}
          visualize ontology (OBO) files (2016)
        </li>
      </ul>
      <h2 id="dotfiles-setup">Setup</h2>
      <ul>
        <li>
          <a href="https://github.com/cmdcolin/dotfiles/">dotfiles</a> - also
          has various other details on my setup
        </li>
      </ul>
      <h2 id="games">Games</h2>
      <ul>
        <li>
          <a href="https://github.com/vastholdings/gratiotquest">
            gratiotquest
          </a>{' '}
          multi-player websocket RPG where you are a pheasant running around a
          MS Paint world (2018)
        </li>
        <li>
          <a href="https://github.com/cmdcolin/slaphappy">slap happy</a>{' '}
          retrofitted a arcade cabinet with a raspberry pi (2018)
        </li>
      </ul>
      <h2 id="coursera-classes">Coursera classes</h2>
      <ul>
        <li>
          Experimental Genome Science, University of Pennsylvania 2013,{' '}
          <a href="genomesci.pdf">statement of completion</a>
        </li>
        <li>
          Computing for Data Analysis, John Hopkins 2013,{' '}
          <a href="compdata.pdf">statement of completion, with distinction</a>
        </li>
      </ul>
      <h2 id="gallery">Gallery</h2>
      <p>
        <img src="mafviewer.png" width={400} />
        MAFViewer plugin for JBrowse 1 viewing multiple genome alignment of C.
        elegans
      </p>
      <p>
        <img src="gwasviewer.png" width={400} />
        GWASViewer for JBrowse 1
      </p>
      <p>
        <img src="tumblrgraph.png" width={400} />
        Tumblrgraph showing the reblog graph
      </p>
      <p>
        <img src="ontograph.png" width={400} />
        Ontograph showing gene ontology terms
      </p>
      <p>
        <img src="plots.png" width={400} />
        Github burndown chart showing the closing of issues over time
      </p>
      <p>
        <img src="2sm.png" width={400} />A high-resolution export of the
        logistic map fractal from my logistic_chaos_map renderer (
        <a href="https://raw.githubusercontent.com/cmdcolin/logistic_chaos_map/master/img/2.png">
          full res
        </a>
        )
      </p>
    </div>
  )
}
export default function Page() {
  return (
    <>
      <Head>
        <title>Misc scribblings - Projects</title>
      </Head>
      <Layout>
        <Container>
          <Header />
          <Contents />
        </Container>
      </Layout>
    </>
  )
}
