//autor -> Luis Ginés
export const Podio = ({ nombre1, donaciones1, nombre2, donaciones2, nombre3, donaciones3 }) => {

    return <>
        <div className="vh-50 d-flex flex-row  text-center">
            <div className="m-1 p-1 order-2 flex-fill d-flex flex-column">  {/*posicion 1 del podio*/}
                <div className="display-6 mt-auto text-wrap d-flex flex-column">
                    <p className="display-5 text-primary fw-bold bg-warning align-self-center p-4 rounded-circle">1º</p>
                    {!nombre1 ? "placeholder" : nombre1}
                </div>{/*nombre empresa 1 del podio*/}
                <div className="h-100 bg-accent rounded-2 p-1 bg-secondary">
                    <p className="pt-2 display-6">{!donaciones1 ? "placeholder" : donaciones1} donaciones</p>
                </div>
            </div>
            <div className="m-1 p-1 order-1 flex-fill d-flex flex-column"> {/*posicion 2 del podio*/}
                <div className="display-6 mt-auto text-wrap d-flex flex-column">
                    <p className="display-5 text-primary fw-bold bg-warning align-self-center p-4 rounded-circle">2º</p>
                    {!nombre2 ? "placeholder" : nombre2}
                </div> {/*nombre empresa 2 del podio*/}
                <div className="flex-grow h-50 bg-accent rounded-2 p-1 bg-secondary">
                    <p className="pt-2 display-6">{!donaciones2 ? "placeholder" : donaciones2} donaciones</p>
                </div>
            </div>
            <div className="m-1 p-1 order-3 flex-fill d-flex flex-column"> {/*posicion 3 del podio*/}
                <div className="display-6 mt-auto text-wrap d-flex flex-column">
                    <p className="display-5 text-primary fw-bold bg-warning align-self-center p-4 rounded-circle">3º</p>
                    {!nombre3 ? "placeholder" : nombre3}
                </div> {/*nombre empresa 3 del podio*/}
                <div className="h-25 bg-accent rounded-2 p-1 bg-secondary">
                    <p className="pt-2 display-6">{!donaciones3 ? "placeholder" : donaciones3} donaciones</p>
                </div>
            </div>
        </div>
    </>
}