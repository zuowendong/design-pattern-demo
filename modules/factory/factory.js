import { ModalTypes } from "./typing.js";
/**
 *
 * 有一些公共的方法，属性，静态工具
 * Modal 父类
 *
 * 对每种状态内部的属性加工，或者市每种状态的功能扩展
 * Success Warning Error Modal 不同的类
 *
 * 有一个工厂 通过传入的状态 来自动实现 实例化相应的类
 * ModalFactory 类
 */

class Modal {
	constructor(status) {
		this.status = status;
	}

	// 获取类名
	get className() {
		let classStr = "modal";
		switch (this.status) {
			case ModalTypes.SUCCESS:
				classStr += " success";
				break;
			case ModalTypes.WARNING:
				classStr += " warning";
				break;
			case ModalTypes.ERROR:
				classStr += " error";
				break;
			default:
				break;
		}
		return classStr;
	}

	// 工具方法
	static checkStatusIsExist(types, status) {
		for (let k in types) {
			if (types[k] === status) {
				return true;
			}
		}
		return false;
	}
	static outputInfo(info) {
		console.log(info);
	}
}
// 成功的类
class SuccessModal extends Modal {
	constructor(title) {
		super(ModalTypes.SUCCESS);
		this.title = `成功 --> ${title}`;
	}

	goHome(url) {
		setTimeout(() => {
			window.location.href = url;
		}, 2000);
	}
}

// 告警的类
class WarningModal extends Modal {
	constructor(title) {
		super(ModalTypes.WARNING);
		this.title = `告警 --> ${title}`;
	}
	outputInfo(info) {
		Modal.outputInfo("告警提示：" + info);
	}
}

// 失败的类
class ErrorModal extends Modal {
	constructor(title) {
		super(ModalTypes.ERROR);
		this.title = `失败 --> ${title}`;
	}
	outputInfo(err) {
		Modal.outputInfo("失败提示：" + err);
	}
}

// 工厂
class ModalFactory {
	constructor(dom) {
		this.dom = dom;
	}

	create(title, status) {
		const statusIsExist = Modal.checkStatusIsExist(ModalTypes, status);
		if (!statusIsExist) {
			throw new Error("Modal type is incorrect.");
		}

		const dom = this.dom;
		let modal = null;

		switch (status) {
			case ModalTypes.SUCCESS:
				modal = new SuccessModal(title);
				break;
			case ModalTypes.WARNING:
				modal = new WarningModal(title);
				break;
			case ModalTypes.ERROR:
				modal = new ErrorModal(title);
				break;
			default:
				break;
		}

		dom.getElementsByTagName("header")[0].innerText = modal.title;
		dom.className = modal.className;

		return {
			outputInfo: modal.outputInfo,
			goHome: modal.goHome,
		};
	}
}

export default ModalFactory;
