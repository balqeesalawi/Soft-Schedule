const Diary = require("../models/diary")

//API's

exports.diary_index_get = async (req, res) => {
 const diaries = await Diary.find({ owner: req.session.user._id })
  res.render("diary/index.ejs", { diaries })
}

exports.diary_create_get = async (req, res) => {
  if (!req.session.user) return res.send("You must be logged in")
  const diaries = await Diary.find({ owner: req.session.user._id }).populate(
    "owner"
  )
  res.render("diary/new.ejs", { diaries })
}

exports.diary_create_post = async (req, res) => {
  req.body.owner = req.session.user._id
  await Diary.create({
    text: req.body.text,
    mood: req.body.mood,
    owner: req.body.owner,
    date: req.body.date ,
  })

  res.redirect("/diary")
}

exports.diary_edit_get = async (req, res) => {
  const currentDiary = await Diary.findById(req.params.diaryId)
  res.render("diary/edit.ejs", { diary: currentDiary })
}

exports.diary_update_put = async (req, res) => {
  const currentDiary = await Diary.findById(req.params.diaryId)
  if (currentDiary.owner.equals(req.session.user._id)) {
    await Diary.updateOne({
      text: req.body.text,
      mood: req.body.mood,
      date: req.body.date
    })
    res.redirect("/diary")
  } else {
    res.send("You don't have permission to do that.")
  }
}

exports.diary_delete = async (req, res) => {
  const diary = await Diary.findById(req.params.diaryId)
  if (!diary) return res.send("Diary not found")
  if (diary.owner.equals(req.session.user._id)) {
    await diary.deleteOne()
    res.redirect("/diary")
  } else {
    res.send("You don't have permission to do that")
  }
}

exports.diary_filter_post = async (req, res)=> {
  const diaries = await Diary.find({date: req.body.date})
    res.render('diary/index.ejs', {diaries})
}
