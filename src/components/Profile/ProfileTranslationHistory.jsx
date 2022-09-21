import ProfileTranslationHistoryASL from "./ProfileTranslationHistoryASL"

const ProfileTranslationHistory = ( { translations }) => {
   
    const translationList = translations.slice(-10).map(
        (translation, index) => <ProfileTranslationHistoryASL key={ index + "-" + translation } translation={ translation } />)
   
    return (
        <section>
            <h4>Your tranlsation history</h4>
            <ul>
                { translationList }
            </ul>
        </section>
    )
}

export default ProfileTranslationHistory