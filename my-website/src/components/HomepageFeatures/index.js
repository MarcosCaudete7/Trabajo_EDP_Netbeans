import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Uso Libre',
    Svg: require('@site/static/img/licencia.svg').default,
    description: (
      <>
      NetBeans es de código abierto y por ende gratuito, 
      de modo que cualquiera puede descargarse esta aplicación.
      </>
    ),
  },
  {
    title: 'Multilenguaje',
    Svg: require('@site/static/img/multilenguaje.svg').default,
    description: (
      <>
      NetBeans no solo compila en Java, sino que tambien puede 
      utilizar otros como PHP, C, Ruby, entre bastantes más
      </>
    ),
  },
  {
    title: 'Multiplataforma',
    Svg: require('@site/static/img/multiplataforma.svg').default,
    description: (
      <>
      Netbeans se puede descargar en distintos dispositivos, así como ejecutarse en varios S.O
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
