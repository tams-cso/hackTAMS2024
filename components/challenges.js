function ChallengeInfo(props) {
    return (
        <div className='bg-c15 text-white rounded-lg space-y-2 p-6'>
            <h4 className='text-2xl font-bold'>{props.chName}</h4>
            <p className=''>{props.chPar}</p>
        </div>
    )
}

export default ChallengeInfo;