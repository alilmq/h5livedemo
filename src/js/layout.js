import util from './util';
export default class Layout
{
	static adjustLayout()
	{
		let height = util.screenHeight(),
		commentTextbox = $('.comment-textbox'),
		inputHeight = commentTextbox.height() +18;
		commentTextbox.css('top', height - inputHeight);
		let commentList = $('.comment-list'),
		commentListHeight = commentList.height();
		commentList.css('top', height - commentListHeight - inputHeight);
		let favorioate = $('.favorite-animation-container'),
		favoritateHeight = favorioate.height();
		favorioate.css('top', height - favoritateHeight - inputHeight);
	}
}