// Components
import PageLayout from '@/components/layout/PageLayout'

/** The History page of the application */
export default function HistoryPage () {
  return (
    <PageLayout page='history'>
      <section id='history' className='px-[4%]'>
        <div className='max-w-8xl px-10 md:px-[9%] mx-auto my-32 space-y-6'>
          <h2>
            Historia y razón de ser
          </h2>
          <p>
            Hace 12 años, un grupo de emprendedores dedicados a la construcción decidió unir
            fuerzas para crear una empresa que ofreciera un servicio personalizado y de alta
            calidad a sus clientes. Así nació FORTE PROJECT WORLDWIDE, con una visión clara
            y un compromiso con la excelencia.
          </p>
          <p>
            En sus primeros años, se enfocó en establecerse en el mercado y en construir una
            reputación como una compañía confiable. Con una estrategia centrada en el cliente,
            la empresa logró aumentar su cartera de proyectos.
          </p>
          <p>
            A medida que FORTE PROJECT WORLDWIDE crecía, también se enfocaba en ampliar su
            oferta de servicios, con el fin de brindar soluciones integrales a sus clientes.
          </p>
          <p>
            Hoy, después de años en el mercado, FORTE PROJECT WORLDWIDE se ha convertido en
            una empresa líder en la industria de la construcción y el mantenimiento industrial.
            Con una larga lista de clientes satisfechos, se enfoca en mantener su compromiso con
            la calidad, la transparencia y la responsabilidad social, mientras continúa innovando
            y creciendo en un mercado altamente competitivo.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
