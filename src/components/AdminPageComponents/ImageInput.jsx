import { useFormContext } from 'react-hook-form'
import { findInputErrors, isFormValid } from '../../InputValidation'
import { SmallBtn } from '../Buttons'

const previewImage = (e) => {
    const imageFiles = e.target.files
    if(imageFiles.length > 0){
        const imgSrc = URL.createObjectURL(imageFiles[0])
        const imagePreviewElement = document.querySelector('.previewImg')
        imagePreviewElement.src = imgSrc
        imagePreviewElement.style.display="block"
    }
  }

export const ImageInput = () => {
  const {register, formState: {errors}} = useFormContext()
  const placeholder = 'Zdjęcie'
  const inputError = findInputErrors(errors, placeholder)
  const isValid = isFormValid(inputError)
  let borderClass = 'defaultBorder'

  if(!isValid){
    borderClass = 'errorBorder'
  }

  
    return (
      <div className="inputImageContainer">
        {!isValid 
            ? <Error message={inputError.error.message} />
            : <div className="errorContainer"><p className="text error">&nbsp;</p></div>
        }
        <div className={"boxImgAddAdmin shadow flex centerX centerY "+borderClass}>
            <img className="previewImg" alt=""/>
        </div>
        <SmallBtn fz="small" variant="contained" component="label" onChange={e=> previewImage(e)}>
                    Dodaj zdjęcie
                    <input 
                    hidden 
                    type="file" 
                    accept="image/*" 
                    {...register(placeholder, {
                        required: {
                          value: true,
                          message: 'WYMAGANE',
                        },
                      })}
                     
                    />
        </SmallBtn>
      </div>
    );
  }


  const Error = ({ message }) => {
    return (
      <div className="errorContainer">
        <p className="text error"><i className="bi bi-exclamation-circle-fill icon error"></i> {message}</p>
      </div>
    )
  }
  
