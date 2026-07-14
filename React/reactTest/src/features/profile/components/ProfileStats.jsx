import Button from '../../../shared/components/Button'

function ProfileStats({ liked, onToggleLike, views, onAddView }) {
  return (
    <section className="profileStats">
      <div>
        <h2>Profile Interaction</h2>
        <p>{liked ? 'Thanks for endorsing this profile.' : 'Click endorse if you like this profile.'}</p>
      </div>
      <div className="statsActions">
        <Button onClick={onToggleLike}>{liked ? 'Visited' : 'Visite profile'}</Button>
        <Button onClick={onAddView}>
          Profile views: {views}
        </Button>
      </div>
    </section>
  )
}

export default ProfileStats
