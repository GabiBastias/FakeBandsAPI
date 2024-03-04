import { useState } from "react";
import { createRandomFakeBand, deleteFakeBandById, getAllFakeBands, getBandById, patchFakeBand, updateFakeBand } from "../../services/redux/actions";
import styles from "./apiShower.module.css";
import { useDispatch, useSelector } from 'react-redux';
import APIForm from "./APIForm";

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
    const allBands = useSelector(state => state.allBands);
    const language = useSelector(state => state.language);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (event.target.name === "id") setId(event.target.value);
        else if(event.target.name === "updateId") setUpdateId(event.target.value)
        else if(event.target.name === "patchId") setPatchId(event.target.value)
        else if(event.target.name === "deleteId") setDeleteId(event.target.value);
    }

    const handleBands = () => {
        dispatch(getAllFakeBands());
    }

    const handleForm = (event) => {
        if (event.target.value === "Update Fake Band" && updateId === "") {
            alert("Please insert and ID.");
            setFormManipulation({...formManipulation, manipulate: false});
        }else if (event.target.value === "Patch Fake Band" && patchId === "") {
            alert("Please insert and ID.");
            setFormManipulation({...formManipulation, manipulate: false});
        } else {
            setFormManipulation({...formManipulation, manipulate: true, formName: event.target.value});
        }
    }

    const handleUpdateOrPatch = (band, type) => {
        if (type === 'Update Fake Band') {
            dispatch(updateFakeBand(updateId, band));
            setUpdateId("");
        }
        else if (type === 'Patch Fake Band') {
            dispatch(patchFakeBand(patchId, band));
            setPatchId("");
        }
    }

    const handleClose = () => {
        setFormManipulation(false);
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
                        <button onClick={() => {dispatch(getBandById(id)); setId("")}}>X</button>
                    </div>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>{language === "Spanish" ? 'Crear Banda Falsa Aleatoria' : 'Create Random Fake Band'} </summary>
                    <br />
                    <button onClick={() => dispatch(createRandomFakeBand())}>{language === "Spanish" ? 'Crear Banda Falsa Aleatoria' : 'Create Random Fake Band'}</button>
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
                        <button onClick={() => {dispatch(deleteFakeBandById(deleteId)); setDeleteId("")}}>X</button>
                    </div>
                </details>
            </div>
            <APIForm language={language} manipulate={formManipulation} handleClose={handleClose} handleUpdateOrPatch={handleUpdateOrPatch}/>
            <section className={styles.sectionAPIShower}>
                <div className={styles.divView}>
                    <pre className={styles.data}>{JSON.stringify(allBands, null, 2)}</pre>
                </div>
            </section>
        </article>
    )
}

export default APIShower;