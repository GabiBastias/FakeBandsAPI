import { useState } from "react";
import { createRandomFakeBand, deleteFakeBandById, getAllFakeBands, getBandById, patchFakeBand, updateFakeBand } from "../../services/redux/actions";
import styles from "./apiShower.module.css";
import APIForm from "./APIForm";
import BackgroundFands from "../../assets/BackgroundBands.png";
import { FakeBand } from "../../interfaces/fakeBand";
import { useAppDispatch, useAppSelector } from "../../services/redux/hooks";
import { ManupulateResponseFakeBand, setAllBands } from "../../services/redux/reducer";

const APIShower = () => {
    const [id, setId] = useState("");
    const [updateId, setUpdateId] = useState("");
    const [patchId, setPatchId] = useState("");
    const [deleteId, setDeleteId] = useState("");
    const [formManipulation, setFormManipulation] = useState({
        manipulate: false,
        formName: "",
        bandId: ""
    });
    const allBands = useAppSelector(state => state.fakeBands.allBands);
    const language = useAppSelector(state => state.fakeBands.language);
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "id") setId(event.target.value);
        else if(event.target.name === "updateId") setUpdateId(event.target.value)
        else if(event.target.name === "patchId") setPatchId(event.target.value)
        else if(event.target.name === "deleteId") setDeleteId(event.target.value);
    }

    const handleBands = () => {
        dispatch(getAllFakeBands())
        .then((data) => {
            dispatch(setAllBands(data.payload));
        })
        .catch((error) => {
            console.error("Error fetching fake bands:", error);
        });
    }

    const handleForm = (event: React.MouseEvent<HTMLButtonElement>) => {

        const buttonValue = (event.target as HTMLButtonElement).value;

        if (buttonValue === "Update Fake Band" && updateId === "") {
            alert("Please insert and ID.");
            setFormManipulation({...formManipulation, manipulate: false});
        }else if (buttonValue === "Patch Fake Band" && patchId === "") {
            alert("Please insert and ID.");
            setFormManipulation({...formManipulation, manipulate: false});
        } else {
            setFormManipulation({...formManipulation, manipulate: true, formName: buttonValue});
        }
    }

    const handleUpdateOrPatch = (band: FakeBand, type: string) => {
        if (type === 'Update Fake Band') {
            dispatch(updateFakeBand({id: updateId, fakeBand: band}))
            .then(data => {
                dispatch(ManupulateResponseFakeBand(data.payload.band))
                alert(data.payload.message)
            });
            setUpdateId("");
        }
        else if (type === 'Patch Fake Band') {
            dispatch(patchFakeBand({id: patchId, fakeBand: band}))
            .then(data => {
                dispatch(ManupulateResponseFakeBand(data.payload.band))
                alert(data.payload.message)
            });
            setPatchId("");
        }
    }

    const handleClose = () => {
        setFormManipulation({...formManipulation, manipulate: false});
    }

    return(
        <article className={styles.articleAPIShower}>
            <div className={styles.divLeft}>
                <h2 className={styles.h2APIShower}>{language === "Spanish" ? 'API de Bandas Falsas: ' : 'Fake Band API-REST: '}</h2>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>{language === "Spanish" ? 'Obtener todas las Bandas' : 'Get all Bands'} </summary>
                    <br />
                    <button onClick={handleBands}>{language === "Spanish" ? 'Obtener todas las Bandas' : 'Get all Bands'}</button>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>{language === "Spanish" ? 'Obtener Banda por ID' : 'Get Band by ID'} </summary>
                    <br />
                    <div className={styles.inputButton}>
                        <input onChange={handleChange} name="id" value={id} type="text" placeholder={language === "Spanish" ? 'Ingrese el ID' : 'Insert the ID...'}/>
                        <button onClick={() => {
                            dispatch(getBandById(id))
                            .then(data => dispatch(ManupulateResponseFakeBand(data.payload)))
                            .catch(error => alert(error.message)); 
                            setId("")
                        }}>X</button>
                    </div>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>{language === "Spanish" ? 'Crear Banda Falsa Aleatoria' : 'Create Random Fake Band'} </summary>
                    <br />
                    <button onClick={() => 
                        dispatch(createRandomFakeBand())
                        .then(data => {
                            dispatch(ManupulateResponseFakeBand(data.payload.band))
                            alert(data.payload.message)
                        })
                        .catch(error => alert(error.message))
                    }>{language === "Spanish" ? 'Crear Banda Falsa Aleatoria' : 'Create Random Fake Band'}</button>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>{language === "Spanish" ? 'Crear Banda Falsa' : 'Create Fake Band'} </summary>
                    <br />
                    <button onClick={handleForm} value={language === "Spanish" ? 'Crear Banda Falsa' : 'Create Fake Band'}>{language === "Spanish" ? 'Crear Banda Falsa' : 'Create Fake Band'}</button>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>{language === "Spanish" ? 'Actualizar Banda Completa (PUT)' : 'Update complete Band (PUT)'} </summary>
                    <br />
                    <input onChange={handleChange} name="updateId" value={updateId} type="text" placeholder={language === "Spanish" ? 'Ingrese el ID' : 'Insert the ID...'}/>
                    <br />
                    <br />
                    <button onClick={handleForm} value={language === "Spanish" ? 'Actualizar Banda' : 'Update Band'}>{language === "Spanish" ? 'Actualizar Banda' : 'Update Band'}</button>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>{language === "Spanish" ? 'Actualizar Banda Parcialmente (PATCH)' : 'Update some Fake Band field (PATCH)'} </summary>
                    <br />
                    <input onChange={handleChange} name="patchId" value={patchId} type="text" placeholder={language === "Spanish" ? 'Ingrese el ID' : 'Insert the ID...'}/>
                    <br />
                    <br />
                    <button onClick={handleForm} value={language === "Spanish" ? 'Parchar Banda' : 'Patch Band'}>{language === "Spanish" ? 'Actualizar Banda' : 'Patch Band'}</button>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>{language === "Spanish" ? 'Eliminar Banda por ID' : 'Delete Band by ID'} </summary>
                    <br />
                    <div className={styles.inputButton}>
                        <input type="text" onChange={handleChange} name="deleteId" value={deleteId}placeholder={language === "Spanish" ? 'Ingrese el ID' : 'Insert the ID...'}/>
                        <button onClick={() => {
                            dispatch(deleteFakeBandById(deleteId))
                            .then(data => {
                                dispatch(ManupulateResponseFakeBand(data.payload.band))
                                alert(data.payload.message)
                            })
                            setDeleteId("")}
                        }>X</button>
                    </div>
                </details>
            </div>
            <APIForm language={language} manipulate={formManipulation} handleClose={handleClose} handleUpdateOrPatch={handleUpdateOrPatch}/>
            <section className={styles.sectionAPIShower}>
                <div className={styles.divView}>
                    <img className={styles.backgroundBands} src={BackgroundFands} alt="backgroundBands" />
                    <pre className={styles.data}>{JSON.stringify(allBands, null, 2)}</pre>
                </div>
            </section>
        </article>
    )
}

export default APIShower;