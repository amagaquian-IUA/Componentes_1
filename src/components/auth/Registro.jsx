import Button from '../common/Button'
import Input from '../common/Input'
import { Card, CardTitle, CardBody, CardFooter } from '../common/Card'


export const CardRegistro = ({ submit }) => {

    return (
        <Card>
            <CardTitle title={"App de prueba"} />
            <CardBody>
                <div>
                    <h2 className='title'>Formulario de ingreso</h2>
                    <Input placeHolder={"Escribi tu nombre"} isActive={true} type={"text"} />
                    <Button title={"Enviar"} variant={"btn-primary"} handle={submit} />
                </div>
            </CardBody>
            <CardFooter>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab aut obcaecati autem enim magni optio id illo nobis reprehenderit sint earum, quis nulla commodi, dicta sit, quos voluptates quae?</p>
            </CardFooter>
        </Card>
    )

}

export default CardRegistro