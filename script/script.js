/**
 *                    _ooOoo_
 *                   o8888888o
 *                   88" . "88
 *                   (| -_- |)
 *                    O\ = /O
 *                ____/`---'\____
 *              .   ' \\| |// `.
 *               / \\||| : |||// \
 *             / _||||| -:- |||||- \
 *               | | \\\ - /// | |
 *             | \_| ''\---/'' | |
 *              \ .-\__ `-` ___/-. /
 *           ___`. .' /--.--\ `. . __
 *        ."" '< `.___\_<|>_/___.' >'"".
 *       | | : `- \`.;`\ _ /`;.`/ - ` : | |
 *         \ \ `-. \_ __\ /__ _/ .-` / /
 * ======`-.____`-.___\_____/___.-`____.-'======
 *                    `=---='
 *
 * .............................................
 *          佛祖保佑             永无BUG
 */
// 神👇
function $(query, list = false) {
    var res = document.querySelectorAll(query);
    if (list) return res;
    return res.length == 1 ? res[0] : res;
}
// 只因⬆️
function start() {
    $("#info").style.display = "none";
    $("#questionField").style.display = "";
    get_question();
}
var index = 0, correct = 0, over = false;
function get_question() {
    try {
        var q = QUEST[index];
        var answers = QUESTIONS[q][1];
        $("#question").innerHTML = q;
        for (let i=0; i<answers.length; i++){
            $("#answer"+i).innerHTML = answers[i];
        }
    }
    catch (err) {
        $("#result").innerHTML = `你答对了${correct}/${QUEST.length}道，真是hc天才！！！`;
        over = true;
    }
}
function submit() {
    if (over) return;
    else if ($("#questionField input:checked").value == QUESTIONS[QUEST[index]][0]){
        // $("#result").innerHTML = "True";
        correct += 1;
    }
    index += 1;
    get_question();
}