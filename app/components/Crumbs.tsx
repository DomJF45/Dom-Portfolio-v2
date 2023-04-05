import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { FaChevronRight } from 'react-icons/fa';

interface Props {
  path: string[];
  current: string;
}

const Crumbs = (props: Props) => {

  const { path, current } = props;

  return (
    
    <Breadcrumb separator={<FaChevronRight size={13} />}>
      {path.map((pathItem, index) => {
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink href={`/${pathItem}`}>
              {pathItem}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )
      })}
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href={'#'}>{current}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    
  )

}

export default Crumbs;
