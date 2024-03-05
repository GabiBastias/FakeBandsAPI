import { useEffect, useState } from "react";
import styles from "./apiShower.module.css";
import inputCreateValidator from "../../services/validator/inputAPICreateValidator";
import { createFakeBandByBody } from "../../services/redux/actions";
import { useAppDispatch, useAppSelector } from "../../services/redux/hooks";
import { Errors, formManipulation } from "../../interfaces/defaultValues";
import { FakeBand } from "../../interfaces/fakeBand";

const emptyBand: FakeBand = {
    bandName: "",
    bandDiscs: [],
    bandGenres: [],
    startDate: "",
    numbOfMembers: 0
}

const APIForm = ({ manipulate, handleClose, handleUpdateOrPatch, language }: {manipulate: formManipulation, handleClose: () => void , handleUpdateOrPatch: (band: FakeBand, type: string) => void, language: string}) => {

    const dispatch = useAppDispatch();
    const allGenres = useAppSelector(state => state.fakeBands.allGenres);

    const [ band, setBand ] = useState(emptyBand);

    const [ errors, setErrors ] = useState<Errors>();

    const handleDiscs = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const findId = (document.getElementById("bandDiscs") as HTMLButtonElement).value;
        setBand({...band, bandDiscs: [...band.bandDiscs, findId]})
    }

    useEffect(() => {
        const divAPIForm = (document.getElementById("APIForm") as HTMLFormElement).classList;
        if (manipulate.manipulate === true) {
            divAPIForm.remove("showOrNot");
            divAPIForm.add("formCreateBand");
        } else {
            divAPIForm.add("showOrNot");
            divAPIForm.remove("formCreateBand");
        }
    },[manipulate])

    const clearBand = () => {
        handleClose();
        setBand(emptyBand);
        clearInputAndStyles();
    }

    const handleGenres = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttonElement = event.target as HTMLButtonElement;
        const genresId = document.getElementById(buttonElement.id);

        if (genresId) {
            if (band.bandGenres.includes(buttonElement.value)) {
                const genFinder = band.bandGenres.filter(gen => gen !== buttonElement.value);
                setBand({...band, bandGenres: genFinder});
                genresId.classList.remove('buttomPressed');
            } else {
                setBand({...band, bandGenres: [...band.bandGenres, buttonElement.value]});
                genresId.classList.add('buttomPressed');
            }
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name != "bandDiscs") {
            const updateBand = {...band, [event.target.name]: event.target.value}
            setBand(updateBand);
            if (manipulate.formName != "Patch Fake Band") {
                const validateErrors = inputCreateValidator(updateBand);
                setErrors(validateErrors);
            }
        }
    }

    const clearInputAndStyles = () => {

        let discInput = (document.getElementById('bandDiscs') as HTMLInputElement).value

        if (discInput) {
            discInput = "";
            for (let i = 0; i < allGenres.length; i++) {
                const allGenresButtons = document.getElementById(allGenres[i]._id);
                if (allGenresButtons) {
                    allGenresButtons.classList.remove('buttomPressed');
                }
            }
        }
    }

    const handleSubmit = (type: string) => {
        if (event) {
            event.preventDefault();
            if (type === 'Create Fake Band' || type === 'Crear Banda Falsa') {
                dispatch(createFakeBandByBody(band))
            } else if (type === 'Update Fake Band' || type === 'Actualizar Banda') {
                handleUpdateOrPatch(band, type);
            } else if (type === 'Patch Fake Band' || type === 'Parchar Banda') {
                handleUpdateOrPatch(band, type);
            }
            clearBand();
            clearInputAndStyles();
        }
    }

    return(
        <form id="APIForm" className={styles.showOrNot} onSubmit={() => handleSubmit(manipulate.formName)}> 
            <fieldset className={styles.fieldsetCreateBand}>
                <legend>{manipulate.formName}</legend>
                <div className={styles.divName}>
                    <label>{language === "Spanish" ? 'Nombre de la Banda' : 'Band Name'}</label>
                    <input 
                        type="text" 
                        name="bandName"
                        value={band.bandName}
                        onChange={handleChange}
                        className={styles.inputName}
                    />
                    {
                        errors?.bandName ? <span className={styles.spanErrors}>{errors.bandName}</span> : null
                    }
                </div>
                <div className={styles.divDiscs}>
                    <label className={styles.labelDiscs}>{language === "Spanish" ? 'Discos' : 'Discs'}</label>
                    <div className={styles.divDiscTags}>
                        <input 
                            type="text"
                            name="bandDiscs"
                            id="bandDiscs"
                            placeholder={language === "Spanish" ? 'Ingrese UN disco a la vez' : "Insert ONE Disc at time"}
                            onChange={handleChange}
                            className={styles.inputDiscs}
                        />
                        <button 
                            type="submit" 
                            className={styles.buttonDiscs}
                            onClick={handleDiscs}
                        >X</button>
                    </div>
                    <div className={styles.divBandDisc}>
                        {
                            band?.bandDiscs && band.bandDiscs.map((fakeBand, index) => {
                                return <p key={index}>{fakeBand}</p>
                            })
                        }
                    </div>
                    <br />
                    {
                        errors?.bandDiscs ? <span className={styles.spanErrors}>{errors.bandDiscs}</span> : null
                    }
                </div>
                <div className={styles.divGenres}>
                    <label>{language === "Spanish" ? 'Géneros' : "Genres"}</label>
                    <div className={styles.divGenre}>
                        {
                            allGenres.map((genre, index) => {
                                return <button 
                                            type="button"
                                            key={index}
                                            id={genre._id}
                                            value={genre.name}
                                            onClick={handleGenres}
                                            className={styles.genreBtn} 
                                        >{genre.name}</button>
                            })
                        }
                    </div>
                    {
                        errors?.bandGenres ? <span className={styles.spanErrors}>{errors.bandGenres}</span> : null
                    }
                </div>
                <div className={styles.divDate}>
                    <label>{language === "Spanish" ? 'Fecha de Inicio' : "Band Start Date"}</label>
                    <input 
                        type="date" 
                        name="startDate"
                        value={band.startDate}
                        onChange={handleChange}
                    />
                    {
                        errors?.startDate ? <span className={styles.spanErrors}>{errors.startDate}</span> : null
                    }
                </div>
                <div className={styles.divMembers}>
                    <label>{language === "Spanish" ? 'Numero de Integrantes' : "Members Number"}</label>
                    <input 
                        type="number" 
                        name="numbOfMembers"
                        value={band.numbOfMembers}
                        onChange={handleChange}
                    />
                    {
                        errors?.numbOfMembers ? <span className={styles.spanErrors}>{errors.numbOfMembers}</span> : null
                    }
                </div>
                <br />
            </fieldset>
            <br />
            <button disabled={band === emptyBand ? true : false} type="submit" id="sentBtn" className={styles.btnSubmit} onWheel={(e) => (e.target as HTMLButtonElement).blur()}>Send</button>
            <button type="button" onClick={clearBand} className={styles.btnClose}>X</button>
        </form>
    )
}

export default APIForm;