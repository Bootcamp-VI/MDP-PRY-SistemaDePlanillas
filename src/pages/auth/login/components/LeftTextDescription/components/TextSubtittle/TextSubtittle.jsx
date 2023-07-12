import "../TextSubtittle/TextSubTitle.css";

export const SubTexTitle = ({subtitle}) => {

    return (
        <>
            <p className="mb-4 subtitle">
               {subtitle}
            </p>
        </>
    );
}