import Section from "../Section.astro";
import { projects } from "cv.json";

<Fragment>
<Section title="Projectos">
<ul>
{projects.map(({ name, url, isActive, year, highlights, description }) => {
return (
<Fragment><li>
<article>
<header>
<h3>
<a href={url} title={`Ver el proyecto ${name}`}>
{name}
</a>
{isActive && <Fragment><spa>&bull;</spa></Fragment>}
</h3>
<p>{description}</p>
</header>
<footer>
{highlights.map((highlight) => {
return <Fragment><span>{highlight}</span></Fragment>;
})}
</footer>
</article>
</li></Fragment>
);
})}
</ul>
</Section>

<style>{`
  ul {
    display: grid;
    grid-template-columns: 
      /* repeat(auto-fit,minmax(200px, 1fr)); */
      gap: 1rem;
  }

  article {
    border-radius: 8px;
    border: 1px solid #d2d2d2;
    gap: 16px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 100%;
  }

  article header {
    flex: 1;
  }
  article h3 {
    margin-bottom: 4px;
  }
  article a {
    color: #111;
  }
  article a:hover {
    text-decoration: underline;
  }

  article p {
    font-size: 0.75rem;
    line-height: 1.2rem;
    margin-bottom: 4px;

  }

  footer {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    font-size: 0.6rem;
  }

  footer span {
    border-radius: 6px;
    background: #eee;
    color: #444;
    font-size:0.6rem;
    font-weight: 500;
    padding: 0.2rem 0.6rem;
    display: inline-flex;
  }
`}</style>

</Fragment>;
