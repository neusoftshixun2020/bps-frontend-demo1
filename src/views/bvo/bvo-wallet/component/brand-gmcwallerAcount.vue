<template>
  <el-container id="main-content" class="clearfix">
    <el-header>
      <div class="page-header position-relative">
        <h1 style="color: #2679b5;">
          品牌商
          <small>
            <i class="icon-double-angle-right" /> 账户余额
          </small>
        </h1>
      </div>
    </el-header>
    <el-main id="page-content" class="clearfix">
      <el-table :data="tableData">
        <el-table-column prop="Account" label="账户" width="180" />
        <el-table-column prop="Remain" label="余额" width="180" />
        <el-table-column prop="Opertation" label="账户" width="180">

          <el-button size="mini" @click="dialogFormVisible = true">提现</el-button>

        </el-table-column>
      </el-table>

      <!-- Modal -->
      <el-dialog
        title="提现"
        :visible.sync="dialogFormVisible"
        append-to-body="false"
        width="1200px"
      >
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="体现金额">
            <el-input v-model="form.projectID" type="textarea" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.projectName" type="textarea" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button size="small" @click="dialogFormVisible = false">取 消</el-button>
          <el-button size="small" type="primary" @click="add()">确 定</el-button>
        </div>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          Account: '13123',
          Remain: 45
        }
      ],
      dialogFormVisible: false,
      form: {
        projectID: '',
        projectName: '',
        projectType: 1,
        projectPrice: '',
        projectDescription: ''
      }
    }
  },
  methods: {
    handleClick() {}
  }
}
</script>

<style>
</style>

