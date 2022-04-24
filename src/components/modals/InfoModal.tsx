import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Uko bakina" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Gerageza kutombora ijambo inshuro zitarenze 6, 
      ibara rya buri nyuguti ry'ijambo rira hinduka, 
      rikwereka niba uri hafi yo gutombora ijambo.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="correct"
        />
        <Cell value="S" />
        <Cell value="A" />
        <Cell value="Z" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Inyuguti I iri mu ijambo kandi iri mumwanya nyawo.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="I" />
        <Cell value="R" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="present"
        />
        <Cell value="B" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Inyuguti I iri mu ijambo ariko ntiritondetse neza (riri mumwanya utariwo).
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="U" />
        <Cell value="R" />
        <Cell value="U" />
        <Cell isRevealing={true} isCompleted={true} value="Z" status="absent" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Inyuguti Z ntago iri mu ijambo mugomba gutombora.
      </p>
    </BaseModal>
  )
}
