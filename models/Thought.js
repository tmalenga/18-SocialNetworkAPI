const { Schema, model, Types } = require('mongoose');


const ReactionSchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment _id
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 280
      },
      username: {
        type: String,
        required: true,
      },
    },
    {
      toJSON: {
        getters: true
      }
    }
  );

const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
            trim: true
        },       
        username: {
            type: String,
            required: true,
            ref: 'User'
        },
        userId:{
          type: Types.ObjectId,
          ref: 'User',
        },
        reactions: [ReactionSchema],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
  }
)

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;