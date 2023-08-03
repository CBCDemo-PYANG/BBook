import ProfileImage from "../../common/components/ProfileImage";
import { routerHistory } from "../../common/router";

export interface PostNotificationProps {
  byId: string;
  byUsername: string;
  postId: string;
  postPreview: string;
  onVisit: () => any;
}

const PostNotification = ({
  byId,
  byUsername,
  postId,
  postPreview,
  onVisit,
}: PostNotificationProps) => {
  return (
    <div className="is-flex is-flex-direction-row is-align-items-center">
      <figure className="image is-32x32 is-inline-block mr-1 is-flex-shrink-0">
        <ProfileImage username={byUsername} />
      </figure>
      <div>
        <b
          className="is-clickable underline-on-hover"
          onClick={() => routerHistory.push(`/profile/${byId}`)}
        >
          {byUsername}
        </b>{" "}
        has posted some new{" "}
        <b
          className="is-clickable underline-on-hover"
          onClick={() => {
            onVisit();
            routerHistory.push(`/post/${postId}`);
          }}
        >
          content
        </b>{" "}
        on your wall: "{postPreview}"
      </div>
    </div>
  );
};

export default PostNotification;
